import React from "react";

function Main() {

    let text;

    const currentTime = new Date(2022, 1, 1, 19).getHours();

    const customColor = {
        color: ""
    }


    if (currentTime < 12) {
        text = "Good Morning";
        customColor.color = "red";
    } else if (currentTime < 18) {
        text = "Good Afternoon";
        customColor.color = "green";
    } else {
        text = "Good Night";
        customColor.color = "blue";
    }


    return (
    <div>
      <p>Main section</p>
      <p className="heading" style={customColor}>{text}</p>
    </div>
  );
}

export default Main;
