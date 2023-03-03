const base = 'http://127.0.0.1:3000';

export const getCars = async (page, limit = 7) => {
  try {
    const response = await fetch(
      `${base}/garage?_page=${page}&_limit=${limit}`
    );

    return {
      items: await response.json(),
      count: response.headers.get('X-Total-Count'),
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const getCar = async (id) => {
  try {
    const response = await fetch(`${base}/garage/${id}}`);
    return { status: response.status, result: await response.json() };
  } catch (error) {
    throw new Error(error);
  }
};

export const createCar = async (car) => {
  try {
    await fetch(`${base}/garage`, {
      method: 'POST',
      body: JSON.stringify(car),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteCar = async (id) => {
  try {
    await fetch(`${base}/garage/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCar = async (id, car) => {
  try {
    await fetch(`${base}/garage/${id}`, {
      method: 'PUT',
      body: JSON.stringify(car),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch {
    throw new Error();
  }
};

export const startEngine = async (id) => {
  try {
    const response = await fetch(`${base}/engine?id=${id}&status=started`, {
      method: 'PATCH',
    });
    return {
      status: response.status,
      result: await response.json(),
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const stopEngine = async (id) => {
  try {
    const response = await fetch(`${base}/engine?id=${id}&status=stopped`, {
      method: 'PATCH',
    });
    return {
      status: response.status,
      result: await response.json(),
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const drive = async (id) => {
  try {
    const response = await fetch(`${base}/engine?id=${id}&status=drive`, {
      method: 'PATCH',
    });
    return response.status;
  } catch (error) {
    throw new Error(error);
  }
};
