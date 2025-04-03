export interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface RsvpFormData {
  name: string;
  email: string;
  phone: string;
  attendance: 'yes' | 'no';
  guests: number;
  message?: string;
}
