import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <MDBContainer className="p-4 pb-0">
        <form action="">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol size="auto" className="mb-4 mb-md-0">
              <p className="pt-2">
                <strong>Get the FreshCart App</strong>
              </p>
            </MDBCol>

            <MDBCol md="5" size="12" className="mb-4 mb-md-0">
              <MDBInput type="text" id="form5Example2" label="Email address" />
            </MDBCol>

            <MDBCol size="auto" className="mb-4 mb-md-0 ">
              <MDBBtn className="bg-main">Subscribe</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <Link className="text-dark" to="">
          FreshCart.com
        </Link>
      </div>
    </MDBFooter>
  );
}
