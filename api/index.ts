export const getJokes = async () => {
  const url = 'http://10.0.2.2:3000/api/tasks';
  try {
    const response = await fetch(url);
    if (response.ok) {
      const payload = await response.json();
      return payload;
    } else {
      console.error('An error happened');
      return [];
    }
  } catch (error) {
    console.error(error);
  }
};

