const urls = [
    'https://swapi.py4e.com/api/people/1',
    'https://swapi.py4e.com/api/people/2',
    'https://swapi.py4e.com/api/people/3',
    'https://swapi.py4e.com/api/people/4',
    'https://swapi.py4e.com/api/people/5',
    'https://swapi.py4e.com/api/people/6',
    'https://swapi.py4e.com/api/people/7',
    'https://swapi.py4e.com/api/people/8',
    'https://swapi.py4e.com/api/people/9',
    'https://swapi.py4e.com/api/people/10'
  ]
  
  export const fetchData = async () => {
    try {
      const response = await Promise.all(
        urls.map(url => fetch(url).then(res => res.json()))
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log('Error', error)
    }
  }
  