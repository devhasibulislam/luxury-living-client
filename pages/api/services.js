import services from "../../JSON/services.json";

export default function handler(req, res) {
  res.status(200).json(services);
}
