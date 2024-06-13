export const shouldBeLoggedIn = (req, res) => {
  console.log(req.userId);

  res.status(200).json({ message: "You are authorised " });
};

export const shouldBeAdmin = (req, res) => {
  const isAdmin = req.isAdmin;

  if (!isAdmin) return res.status(403).json({ message: "Unathorized" });
  res.status(200).json({ message: "You are authorised as admin" });
};
