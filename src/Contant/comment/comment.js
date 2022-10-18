import Cmddata from "./command-data";
const cdata = [
  {
    name: "Jimmy Will",
    imglink:
      "https://res.cloudinary.com/du4tzzgd7/image/upload/v1665658585/12121212_n1ltdg.jpg",
    cmd: " another word for good command? Noun The ability to express oneself easily and articulatelyfluency articulateness articulacy ease eloquence glibness volubilityanother worability to express oneself easily and articulatelyfluency articulateness articulacy ease eloquence glibness volubilitassurance🥰",
  },

  {
    name: "Alisa Grill",
    imglink:
      "https://res.cloudinary.com/du4tzzgd7/image/upload/v1665662784/OIP_wxyojd.jpg",
    cmd: "Tons of awesome cute boy profile wallpapers to download for free. You can also upload and share your favorite cute boy profile wallpapers. HD wallpapers and background images🙌",
  },
];
const Comment = () => {
  return cdata.map((data) => {
    return (
      <Cmddata imglink={data.imglink} cmd={data.cmd} name={data.name}></Cmddata>
    );
  });
};
export default Comment;
