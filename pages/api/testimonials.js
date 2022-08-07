import testimonials from "../../JSON/testimonials.json";

export default function handler(req, res) {
  res.status(200).json(testimonials);
}
