// import "./Result.scss";
// import FormUser from "../form/Form";

// import bgketqua from "../../image/anh2.jpg";
// import { MdOutlineCancel } from "react-icons/md";

// const Result = (props) => {
//   const {
//     handleQuay,
//     result,
//     hanleOffModalButton,
//     handleSetModalButton,
//     setModalFinalResult,
//   } = props;

//   return (
//     <div className="modal">
//       <div className="blur"></div>
//       <div className="content">
//         <img src={bgketqua} alt="anh" className="anh-ketqua" />

//         <div
//           className="btn-cancel"
//           onClick={() => {
//             handleQuay(false);
//             hanleOffModalButton();
//             handleSetModalButton(false);
//           }}
//         >
//           <MdOutlineCancel />
//         </div>
//         {result === "Bạn hết lượt quay !" ? (
//           <>
//             <div className="hetluot">
//               <p>Bạn hết lượt quay !</p>
//             </div>
//             <p
//               className="trangchu"
//               onClick={() =>
//                 window.open("https://www.facebook.com/piana.vn", "_blank")
//               }
//             >
//               Đến trang chủ
//             </p>
//           </>
//         ) : (
//           <>
//             <div className="gift">
//               <p className="gift__g">
//                 Chúc mừng bạn đã trúng phần quà: <span>{result}</span>
//               </p>
             
//             </div>
//             <div className="text-info">
//               <p className="text-info__t">
//                 Để lại thông tin nhận ngay quà xịn !
//               </p>
//             </div>
//             <div className="info">
//               <FormUser
//                 result={result}
//                 setModalFinalResult={setModalFinalResult}
//                 handleSetModalButton={handleSetModalButton}
//                 handleQuay={handleQuay}
//               />
//             </div>
//           </>
          
//         )}
//       </div>
//     </div>
//   );
// };

// export default Result;
import "./Result.scss";
import FormUser from "../form/Form";
import { MdOutlineCancel } from "react-icons/md";

const Result = (props) => {
  const {
    handleQuay,
    result,
    hanleOffModalButton,
    handleSetModalButton,
    setModalFinalResult,
  } = props;

  return (
    <div className="modal">
      <div className="blur"></div>
      <div className="content">
        {/* Modal content without image */}
        <div
          className="btn-cancel"
          onClick={() => {
            handleQuay(false);
            hanleOffModalButton();
            handleSetModalButton(false);
          }}
        >
          <MdOutlineCancel />
        </div>

        {result === "Bạn hết lượt quay !" ? (
          <>
            <div className="hetluot">
              <p>Bạn hết lượt quay !</p>
            </div>
            <p
              className="trangchu"
              onClick={() =>
                window.open("https://www.facebook.com/piana.vn", "_blank")
              }
            >
              Đến trang chủ
            </p>
          </>
        ) : (
          <>
            <div className="gift">
              <p className="gift__g">
                Chúc mừng bạn đã trúng phần quà: <br></br> <span>{result}</span>
              </p>
            </div>
            <div className="text-info">
              <p className="text-info__t">
                Để lại thông tin nhận ngay quà xịn !
              </p>
            </div>
            <div className="info">
              <FormUser
                result={result}
                setModalFinalResult={setModalFinalResult}
                handleSetModalButton={handleSetModalButton}
                handleQuay={handleQuay}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Result;
