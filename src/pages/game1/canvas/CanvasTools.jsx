import "./CanvasTools.css";
import { useCanvasStore } from "../../../store/canvas/useCanvasStore";
import { TOOL_PENCIL, TOOL_ELLIPSE, TOOL_RECTANGLE } from "./tools";

const Tools = () => {
  const { setTool, size, setSize, setFillColor, color, setMode } =
    useCanvasStore();

  return (
    <div className="tools">
      <div className="tools-wrap">
        <button 
          onClick={() => setTool(TOOL_PENCIL)}>
          <img src="/images/canvas/pencil_btn.png" />
        </button>
        <button
          onClick={() => {
            setTool("erase");
          }}
        >
          <img src="/images/canvas/erase_btn.png" />
        </button>
        <button
          onClick={() => {
            setTool(TOOL_RECTANGLE);
            setFillColor("");
            setMode("stroke");
          }}
        >
          <img src="/images/canvas/stroke_rect_btn.png" />
        </button>
        <button
          onClick={() => {
            setTool(TOOL_ELLIPSE);
            setFillColor("");
            setMode("stroke");
          }}
        >
          <img src="/images/canvas/stroke_circle_btn.png" />
        </button>
        <button
          onClick={() => {
            setTool(TOOL_RECTANGLE);
            setFillColor(color);
            setMode("fill");
          }}
        >
          <img src="/images/canvas/fill_rect_btn.png" />
        </button>
        <button
          onClick={() => {
            setTool(TOOL_ELLIPSE);
            setFillColor(color);
            setMode("fill");
          }}
        >
          <img src="/images/canvas/fill_circle_btn.png" />
        </button>
        <button onClick={() => setTool("clear")}>
          <img src="/images/canvas/clear_btn.png" />
        </button>
      </div>
        <div className="PB-range-slider-div">
          <input
            type="range"
            min="0"
            max="16"
            step="1"
            value={size}
            className="PB-range-slider"
            onChange={(e) => setSize(e.target.value)}
          ></input>
        </div>
    </div>
  );
};

export default Tools;
