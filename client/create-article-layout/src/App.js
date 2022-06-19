//import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    confirmAlert({
      title: "Konfirmasi",
      message: "Apakah anda yakin ingin menyimpan data ini?",
      buttons: [
        {
          label: "Yes",
          onClick: () => console.log(data),
        },
        {
          label: "No",
          //onClick: () => alert("Click No"),
        },
      ],
    });
  };

  // console.log(watch());

  // console.log(errors.name)

  return (
    <div className="main-wrappe">
      <nav className="navbar navbar-expand-lg navbar-dark bg-navnew static-top mb-5 shadow">
        <div className="container">
          <a className="navbar-brand" href="#">
            TulisAja
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Writing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Reading
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row justify-content-sm-center pt-5">
          <div className="col-sm-6 shadow round pb-3 bg-formnew">
            <h1 className="text-center pt-3 text-secondary">Form Add</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form-inline">
              {/* Judul */}
              <div className="form-group">
                <label className="col-form-label">Judul :</label>
                <input
                  type="text"
                  className={`form-control ${errors.judul && "invalid"}`}
                  {...register("judul", { required: "Judul is Required" })}
                  onKeyUp={() => {
                    trigger("judul");
                  }}
                />
                {errors.judul && <small className="text-danger">{errors.judul.message}</small>}
              </div>

              {/* Tipe */}
              <div className="form-group">
                <label className="col-form-label">Tipe :</label>
                <input
                  type="text"
                  className={`form-control ${errors.tipe && "invalid"}`}
                  {...register("tipe", { required: "Tipe is Required" })}
                  onKeyUp={() => {
                    trigger("tipe");
                  }}
                />
                {errors.tipe && <small className="text-danger">{errors.tipe.message}</small>}
              </div>

              {/* Genre */}
              <div className="form-group">
                <label className="col-form-label">Genre :</label>
                <input
                  type="text"
                  className={`form-control ${errors.genre && "invalid"}`}
                  {...register("genre", { required: "Genre is Required" })}
                  onKeyUp={() => {
                    trigger("genre");
                  }}
                />
                {errors.genre && <small className="text-danger">{errors.genre.message}</small>}
              </div>

              {/* Isi */}
              <div className="form-group">
                <label className="col-form-label">Isi :</label>
                <textarea
                  className={`form-control ${errors.isi && "invalid"}`}
                  {...register("isi", {
                    required: "Isi is Required",
                    minLength: {
                      value: 10,
                      message: "Minimum Required length is 10",
                    },
                    maxLength: {
                      value: 1000,
                      message: "Maximum allowed length is 1000 ",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("isi");
                  }}
                ></textarea>
                {errors.isi && <small className="text-danger">{errors.isi.message}</small>}
              </div>

              {/* Submit */}
              <input type="submit" className="btn bg-navnew my-3 submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>

      <footer className="fixed-bottom bg-navnew">
        <div className="text-center p-3 text-white">© Engineering48 | Ruangguru | 2022</div>
      </footer>
    </div>
  );
}

export default App;
