import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRsvpSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create API router
  const apiRouter = express.Router();
  
  // POST endpoint for RSVP submissions
  apiRouter.post("/rsvp", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = insertRsvpSchema.parse(req.body);
      
      // Check if this email has already RSVP'd
      const existingRsvp = await storage.getRsvpByEmail(validatedData.email);
      
      if (existingRsvp) {
        // Update existing RSVP
        const updatedRsvp = await storage.updateRsvp(existingRsvp.id, validatedData);
        if (!updatedRsvp) {
          return res.status(404).json({ message: "RSVP not found" });
        }
        return res.status(200).json({ 
          message: "Your RSVP has been updated", 
          data: updatedRsvp 
        });
      }
      
      // Create new RSVP
      const newRsvp = await storage.createRsvp(validatedData);
      
      return res.status(201).json({ 
        message: "Thank you for your RSVP!", 
        data: newRsvp 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Format validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message 
        });
      }
      
      console.error("Error handling RSVP submission:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // GET endpoint to retrieve all RSVPs
  apiRouter.get("/rsvps", async (_req: Request, res: Response) => {
    try {
      const rsvps = await storage.getRsvps();
      return res.status(200).json({ data: rsvps });
    } catch (error) {
      console.error("Error retrieving RSVPs:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Register the API router with a /api prefix
  app.use("/api", apiRouter);

  // Create HTTP server using Node's built-in http module
  const httpServer = createServer(app);

  return httpServer;
}
