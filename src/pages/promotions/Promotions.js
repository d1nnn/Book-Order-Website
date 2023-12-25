import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./promotions.css";

const today = new Date();
let date =
  today.getFullYear().toString() +
  "/" +
  (today.getMonth() + 1).toString() +
  "/" +
  today.getDate().toString();

const objectsArray = [
  {
    id: 1,
    imgUrl: "promotion-dec-banner",
    title: "Chirstmas Sale",
    author: "Người viết : BaBook - ",
    content: `<b>BaBook</b> khuyến mãi dịp Giáng sinh, nhiều ưu đãi hấp dẫn. Giảm
      tới 50% các sản phẩm của cửa hàng.
      <br />
      Giáng sinh nhiều ưu đãi hấp dẫn. Các tựa sách chủ đề Giáng sinh đang
      chờ bạn ở BaBook. Cùng nhau mua sắm dịp cuối năm làm đầy tủ sách
      nào.`,
  },
  {
    id: 2,
    imgUrl: "promotion-birthday-banner",
    title: "BaBook Sale Birthday",
    author: "Người viết : BaBook - ",
    content: `Để tri ân những khách hàng đã ủng hộ Nhà sách <b>BaBook</b> trong suốt thời gian qua, chúng tôi xin gửi đến quý khách hàng chương trình khuyến mãi giảm giá 10% cho tất cả sách trong dịp sinh nhật này.
      Chương trình áp dụng từ ngày 15/12/2023 đến hết ngày 20/12/2023.
      Nhanh tay đến Nhà sách <b>BaBook</b> để tận hưởng ưu đãi hấp dẫn này nhé!`,
  },
  {
    id: 3,
    imgUrl: "promotion-banner",
    title: "BaBook Share Hobby - Share Money",
    author: "Người viết : BaBook - ",
    content: `Hãy cùng chia sẻ quyển sách yêu thích của bạn với <b>BaBook</b>. Cơ hội mua những đấu sách hot hiện nay với giá <b>1đ</b>.`,
  },
  {
    id: 4,
    imgUrl: "promotion-banner1",
    title: "BaBook - Bookworm",
    author: "Người viết : BaBook - ",
    content: `Tháng của mọt sách,<b>BaBook</b> khuyến mãi với hoá đơn từ 100.000VND.`,
  },
];

const Promotions = () => {
  const [proContent, setProContent] = useState(objectsArray);

  return (
    <div>
      <h1>Promotions</h1>
      <div className="thuy_container">
        {objectsArray.map((pro, i) => {
          return (
            <>
              <NavLink to={`/promotions/${pro.id}`} className={"navlink"}>
                <div className="thuy_card">
                  <div className="thuy_card-img">
                    <img
                      src={require("../../assets/" + pro.imgUrl + ".jpg")}
                      alt="promotion-dec"
                    />
                  </div>
                  <div className="thuy_card-content-title">
                    <h5>{pro.title}</h5>
                    <p className="thuy_content-author">
                      Người viết : BaBook - {date}{" "}
                    </p>
                    <div
                      className="thuy_content-body"
                      dangerouslySetInnerHTML={{ __html: pro.content }}
                    />
                    {/* <p className="content-body">{pro.content}</p> */}
                  </div>
                </div>
              </NavLink>
            </>
          );
        })}
      </div>
    </div>
    // </Context.Provider>
  );
};

export default Promotions;
