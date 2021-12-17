import fake from "./Api/FakeApi";
import examApi from "./Api/ExamApi";


export const routerModule = () => {
    const imports = [
        fake,
        examApi
    ]
    return imports
}



