import PropTypes from "prop-types";

//86400000 ms in a day

// eslint-disable-next-line react/prop-types
const RepoCard = ({ name, language, update, url }) => {
  let timeString = "";
  let strDate = update;
  strDate = strDate.substring(0, 10);
  const date1 = new Date(strDate);
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //   console.log(diffTime + " milliseconds");
  //   console.log(diffDays + " days");
  const month = date1.toLocaleString("default", { month: "short" });

  if (diffDays > 32) {
    timeString =
      "updated on " +
      month +
      " , " +
      date1.getDay() +
      " , " +
      date1.getFullYear();
  } else {
    timeString = "updated " + diffDays + " days ago";
  }

  return (
    <div className="flex flex-col justify-between p-2 gap-6  border border-gray-600 rounded-md w-full h-full">
      <div className="flex justify-between ">
        <a href={url} target="_blank" rel="noreferrer">
          <p className="font-bold text-blue-600">{name}</p>
        </a>
        <p className="border font-bold text-gray-400 border-gray-600 rounded-2xl px-2 py-1 text-[10px]">
          Public
        </p>
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-400">{language}</p>
        <p className="text-[10px] text-gray-400">{timeString}</p>
      </div>
    </div>
  );
};

RepoCard.PropTypes = {
  name: PropTypes.any,
  language: PropTypes.any,
  update: PropTypes.any,
};

export default RepoCard;
