import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a list filtered by name', () => {
    const pipe = new SearchPipe();
    let array = [
      {
        birthdate: "2018-12-16T22:00:00",
        id: 109,
        name: "Laura"
      }, {
        birthdate: "2018-12-16T22:00:00",
        id: 10,
        name: "Alejandro Rubio"
      }, {
        birthdate: "2018-12-16T22:00:00",
        id: 11,
        name: "Javier"
      }
    ];

    expect(pipe.transform(array, 'name', 'a')).toEqual(array);
    expect(pipe.transform(array, 'name', 'A')).toEqual([array[1]]);
    expect(pipe.transform(array, 'birthdate', '2018')).toEqual(array);
    expect(pipe.transform(array, 'name', undefined)).toEqual(array);
    expect(pipe.transform(undefined, 'name', 'a')).toEqual([]);
    expect(pipe.transform(array, undefined, 'a')).toEqual([]);
  });
});
