import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Assignment6 from "./labs/a6";
import Assignment7 from "./labs/a7";
import mongoose from "mongoose";
const CONNECTION_STRING = "mongodb://localhost:27017/tuiter" || process.env.DB_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING);

function App() {
       return (
              <BrowserRouter>
                     <div className="container">
                            <Routes>
                                   <Route index
                                          element={<Labs />} />
                                   <Route path="/hello"
                                          element={<HelloWorld />} />
                                   <Route path="/tuiter"
                                          element={<Tuiter />} />
                                   <Route path="/a6"
                                          element={<Assignment6 />} />
                                   <Route path="/a7"
                                          element={<Assignment7 />} />
                            </Routes>
                     </div>
              </BrowserRouter>
       );
}
export default App;