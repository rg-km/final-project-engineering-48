import "./App.css";

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
    console.log(data);
    reset();
  };

  // console.log(watch());

  // console.log(errors.name)

  return (
    <div className="form-page">
      <div className="Navbar">
        <ul>
          <li>
            <a href="/home">
              <p>TulisAja</p>
            </a>
          </li>
          <li>
            <a href="/writing">
              <p>Writing</p>
            </a>
          </li>
          <li>
            <a href="/reading">
              <p>Reading</p>
            </a>
          </li>
          <li>
            <a href="/about">
              <p>About</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="container pt-5">
        <div className="row justify-content-sm-center pt-5">
          <div className="col-sm-6 shadow round pb-3">
            <h1 className="text-center pt-3 text-secondary">Form Add</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
              <input type="submit" className="btn btn-primary my-3 submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
