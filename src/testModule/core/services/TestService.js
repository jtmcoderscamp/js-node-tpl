import TestServicePort from "../ports/TestServicePort";
import TestRepositoryPort from "../ports/TestRepositoryPort";

export default class TestService extends TestServicePort {

    constructor(testRepository = new TestRepositoryPort()) {
        super();
        this._repository = testRepository;
    }

    async findTestResult(testId) {
        const result = await this._repository.selectByTestId(testId);
        return result;
    }
}