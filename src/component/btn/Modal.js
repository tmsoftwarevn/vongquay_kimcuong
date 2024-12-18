import { useEffect, useRef, useState } from "react";
import anh2 from "../../image/anh2.jpg";
import vongquay from "../../image/VongQuay.png";
import "./Modal.scss";
import { MdOutlineCancel } from "react-icons/md";
import quayngay from "../../image/nutquay.png";
import muiten from "../../image/mui ten.png";
const Modal = (props) => {
  const { handleQuay, getResult, resetModalWheel, handleSetModalButton } =
    props;
  const [isSpinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [valueNoiDung, setValueNoiDung] = useState("");
  const wheelRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenThongBao, setIsThongBao] = useState(false);
  const refOutside = useRef(null);

  const values = [
    { gift: "Sách Trái Tim Kim Cương", pct: 20 },
    { gift: "Trang sức bạc", pct: 15 },
    { gift: "Gấu Baby Three 400%", pct: 5 },
    { gift: "Sách/Voucher 10tr", pct: 10 },
    { gift: "Voucher 10tr", pct: 30 },
    { gift: "Set quà mỹ phẩm chăm sóc da DMD", pct: 20 },
  ];
  const sliceSize = 360 / 6;
  const spinWheel = () => {
    if (isSpinning) return;
    const cookieValue = localStorage.getItem("TMWheel");

    if (cookieValue === null) {
      setSpinning(true);
      const fullRots = 6;
      const targetAngle = 600 * fullRots;
      const expanded = values.flatMap((user) => Array(user.pct).fill(user));
      let indexRandom = Math.floor(Math.random() * expanded.length); // arr
      const winner = expanded[indexRandom]; // get element
      let findIndexGift = values.findIndex((item) => item.gift === winner.gift);
      getResult(values[findIndexGift].gift);
      //console.log("index gift is: ", findIndexGift);
      //console.log("winner number: " + JSON.stringify(winner));

      let initialRotation = 360;
      wheelRef.current.style.transition = "none";
      wheelRef.current.style.transform = `rotate(${initialRotation}deg)`;

      const randomAngle =
        Math.random() *
          ((findIndexGift + 1) * sliceSize - findIndexGift * sliceSize + 1) +
        findIndexGift * sliceSize;
      setTimeout(() => {
        wheelRef.current.style.transition = "all ease-out 5s";
        wheelRef.current.style.transform = `rotate(${
          randomAngle + targetAngle
        }deg)`;

        setTimeout(() => {
          setIsOpen(true);
          setSpinning(false);
          handleQuay(true);
          //localStorage.setItem("TMWheel", "OK");
        }, 6000);
      }, 0);
    } else {
      handleQuay(true);
      getResult("Bạn hết lượt quay !");
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);
  const handleClickOutside = (e) => {
    if (
      refOutside &&
      refOutside.current &&
      !refOutside.current.contains(e.target)
    ) {
      resetModalWheel();
      handleSetModalButton(false);
    }
  };

  return (
    <>
      <div className="modal-quay" ref={refOutside}>
        {/* <img src={anh2} alt="anh" className="anh-modal" /> */}

        <div className="vongquay-btn">
          <img src={muiten} alt="anh" className="arrow-modal" />
          <img
            src={vongquay}
            alt="vong quay"
            ref={wheelRef}
            className="vongquay-modal"
          />

          <div className="btXoay" onClick={() => spinWheel()}>
            <img src={quayngay} alt="btn-quay" className="anh_btn-quay" />
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Modal;
