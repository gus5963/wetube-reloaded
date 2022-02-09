import Video from "../models/video";

/* Callback
Video.find({}, (error, videos) => {
  return res.render("home", { pageTitle: "Home", videos });
});

*/

export const home = async (req, res) => {
  const videos = await Video.find();
  return res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => res.send("Searching!");
export const userVideo = async (req, res) => {
  const { id } = req.params;
  //link를 통해 들어가게 된 페이지로 부터 id를 얻는다.
  const video = await Video.findById(id);
  //id를 통해 Video에 대한 정보를 갖고 온다.
  if (!video) {
    return res.render("404", { pageTitle: "Video not Found" });
  }
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  //id를 통해 Video에 대한 정보를 갖고 온다.
  if (!video) {
    return res.render("404", { pageTitle: "Video not Found" });
  }
  return res.render("edit", {
    pageTitle: `Edit : ${video.title}`,
    video,
  });
};
export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { pageTitle: "Video not Found" });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: hashtags
      .split(/[\s,]+/)
      .map((word) => (!word.startsWith("#") ? `#${word}` : `${word}`)),
  });
  return res.redirect(`/videos/${id}`);
};
export const deleted = (req, res) => res.send("Delete Video");
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = async (req, res) => {
  // here we will add a video to the videos array
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags
        .split(/[\s,]+/)
        .map((word) => (!word.startsWith("#") ? `#${word}` : `${word}`)),
      // hashtags를 입역할 때 콤마 뒤에 스페이스를 주게 될 경우를 대비
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
