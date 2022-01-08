import { FakeInferenceRepository } from '@modules/inference/domain/repositories/fakes/FakeInferenceRepository';
import CreateInferenceService from '../CreateInferenceService';

let fakeInferenceRepository: FakeInferenceRepository;
let createInference: CreateInferenceService;

const fakeInference = {
  normal_image: 'normal_image',
  inferred_image: 'inferred_image',
  inference: 'inference',
  totenId: 'totenId',
};

describe('CreateInference', () => {
  beforeEach(() => {
    fakeInferenceRepository = new FakeInferenceRepository();
    createInference = new CreateInferenceService(fakeInferenceRepository);
  });

  it('should be able to create a new inference', async () => {
    const inference = await createInference.execute(fakeInference);

    expect(inference).toHaveProperty('id');
  });
});
