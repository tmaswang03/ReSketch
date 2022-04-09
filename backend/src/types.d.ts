import { WebSocket } from "ws";

interface User {
  id: string;
  name: string;
  socket: WebSocket;
  send: (event: Event) => void;
  isHost?: boolean;
}

interface Event {
  event: string;
}

interface ImageResult {
  confidence: number;
  labels: Array[string];
}

interface UserEvent extends Event {
  event: "user_update";
  guild_id: string;
  users: { name: string; id: string }[];
}

interface ImageResults {
  label: string;
  confidence: number;
}
interface Query {
  locations: string[];
  properties: string[];
  mi;
} // locations: [],
// properties: [],
// mid: '/m/02wbm',
// locale: '',
// description: 'Food',
// score: 0.9611189961433411,
// confidence: 0,
// topicality: 0.9611189961433411,
// boundingPoly: null
