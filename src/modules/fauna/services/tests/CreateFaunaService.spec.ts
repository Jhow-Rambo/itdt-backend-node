import { FakeFaunaRepository } from '@modules/fauna/domain/repositories/fakes/FakeFaunaRepository';
import CreateFaunaService from '../CreateFaunaService';

let fakeInferenceRepository: FakeFaunaRepository;
let createInference: CreateFaunaService;

const fakeInference = {
  normal_image: 'normal_image',
  inferred_image: 'inferred_image',
  inference: 'inference',
  totenId: 'totenId',
};

describe('CreateInference', () => {
  beforeEach(() => {
    fakeInferenceRepository = new FakeFaunaRepository();
    createInference = new CreateFaunaService(fakeInferenceRepository);
  });

  it('should be able to create a new inference', async () => {
    const inference = await createInference.execute(fakeInference);

    expect(inference).toHaveProperty('id');
  });
});
