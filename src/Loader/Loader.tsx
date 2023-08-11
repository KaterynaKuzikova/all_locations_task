import "./Loader.css";

export const Loader = () => (
  <div className="loader_wrapper" role="progressbar">
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
