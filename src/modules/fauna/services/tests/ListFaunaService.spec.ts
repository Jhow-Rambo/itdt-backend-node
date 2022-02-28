import { FakeFaunaRepository } from '@modules/fauna/domain/repositories/fakes/FakeFaunaRepository';
import ListFaunaService from '../ListFaunaService';

let fakeInferenceRepository: FakeFaunaRepository;
let listInference: ListFaunaService;

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
    fakeInferenceRepository = new FakeFaunaRepository();
    listInference = new ListFaunaService(fakeInferenceRepository);
  });

  it('should be able to return all inferences', async () => {
    await fakeInferenceRepository.create(fakeInference1);
    await fakeInferenceRepository.create(fakeInference2);

    const inferences = await listInference.execute();

    expect(inferences).toHaveLength(2);
  });
});
