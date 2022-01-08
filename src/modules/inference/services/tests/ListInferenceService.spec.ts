import { FakeInferenceRepository } from '@modules/inference/domain/repositories/fakes/FakeInferenceRepository';
import ListInferenceService from '../ListInferenceService';

let fakeInferenceRepository: FakeInferenceRepository;
let listInference: ListInferenceService;

const fakeInference1 = {
  normal_image: 'normal_image',
  inferred_image: 'inferred_image',
  inference: 'inference',
  totenId: 'totenId',
};

const fakeInference2 = {
  normal_image: 'normal_image',
  inferred_image: 'inferred_image',
  inference: 'inference',
  totenId: 'totenId',
};

describe('ListInference', () => {
  beforeEach(() => {
    fakeInferenceRepository = new FakeInferenceRepository();
    listInference = new ListInferenceService(fakeInferenceRepository);
  });

  it('should be able to return all inferences', async () => {
    await fakeInferenceRepository.create(fakeInference1);
    await fakeInferenceRepository.create(fakeInference2);

    const inferences = await listInference.execute();

    expect(inferences).toHaveLength(2);
  });
});
