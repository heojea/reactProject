import { Route, Routes} from "react-router-dom";
import Main from "../app/Main";
import Product from "../app/product/Product";
import NotFound from "./NotFound";



function Router() {
    return (
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/product/*" element={<Product/>}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    );
}
export default Router;

