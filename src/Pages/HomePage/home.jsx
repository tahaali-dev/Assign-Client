import Topsection from "../../Components/Home components/Top Section/Topsection";
import MiddleSection from "../../Components/Home components/Middle Section/MiddleSection";
import "./home.css";
import BottomSection from "../../Components/Home components/Bottom Section/BottomSection";
import { getAssign } from "../../Store/Slices/Assignmentslice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getPendingData,
  resetpending,
} from "../../Store/PendingSlice/PendingSlice";
import { getCompletedData } from "../../Store/CompletedSlice/CompletedSlice";
// --------------------***-----------------------------------

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAssign());
    dispatch(getPendingData());
    dispatch(getCompletedData());
    dispatch(resetpending());
  }, []);

  return (
    <div className="homecont">
      <Topsection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
};

export default Home;
