import testimonials from "./testimonials";

export default function handler(req, res) {
  res.status(200).json(testimonials);
}
