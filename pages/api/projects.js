import projects from "../../JSON/projects.json";

export default function handler(req, res) {
  res.status(200).json(projects);
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
