import "./App.css";
import Input from "./componenet/Input";
import Button from "./componenet/Button";
import Object from "./componenet/Object";
import Selected from "./componenet/Selectetd";
import Table from "./componenet/Table";
// import './app.css'

function App() {
  const order = () => {
    alert("ok hugaya ");
  };
  return (
    <div className="center">
      <h1>first</h1>
      <Input type="text" value="jawan pakistan" />
      <h1>Button</h1>
      <Button label="addTask" onclick={order} />
      <h1>Select</h1>
      <Selected
        label="enter your istituted name"
        value1=" sir adam ji"
        value2="course"
      />
      <h1>Table </h1>
      <Table
      className="table"
        heading1="first"
        heading2="second"
        heading3="third"
        content1="1pera"
        content2="2pera"
        content3="3pera"
        content4="4pera"
        content5="5pera"
        content6="6pera"
      />
      <h1>Data Component</h1>
      <Object
        name="Hammid raza"
        id="55"
        age="18"
        active="true"
        institute=" 789"
      />
    </div>
  );
}

export default App;
