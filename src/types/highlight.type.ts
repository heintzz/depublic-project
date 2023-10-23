interface IHighlight {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  is_available: boolean;
  event_date: string;
}

export interface EventType extends IHighlight {
  location: string;
}

export interface BlogType extends IHighlight {}

export interface SummaryType {
  top_events: Array<EventType>;
  events: Array<EventType>;
  blogs: Array<BlogType>;
}
