import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        This My capstone MERN project
      </Tab>
      <Tab eventKey="profile" title="Profile">
        My Github ID : Meenajayaraj

      </Tab>
      <Tab eventKey="contact" title="Contact" >
        MailID : meenajayaraj18@gmail.com ||
        linkedIN : Meena Jayaraj
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;
