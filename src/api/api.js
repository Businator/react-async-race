const base = 'http://127.0.0.1:3000';
const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

///////////////Work With Cars///////////////

export const getCars = async (page, limit = 7) => {
  try {
    const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);

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
    const response = await fetch(`${garage}/${id}}`);
    return { status: response.status, result: await response.json() };
  } catch (error) {
    throw new Error(error);
  }
};

export const createCar = async (car) => {
  try {
    await fetch(`${garage}`, {
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
    await fetch(`${garage}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCar = async (id, car) => {
  try {
    await fetch(`${garage}/${id}`, {
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

///////////////Work With Engine///////////////

export const startEngine = async (id) => {
  try {
    const response = await fetch(`${engine}?id=${id}&status=started`, {
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
    const response = await fetch(`${engine}?id=${id}&status=stopped`, {
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
    const response = await fetch(`${engine}?id=${id}&status=drive`, {
      method: 'PATCH',
    });
    return response.status;
  } catch (error) {
    throw new Error(error);
  }
};

///////////////Work With Winners///////////////

export const getWinners = async (
  page,
  limit = 10,
  sort = 'time',
  order = 'ASC'
) => {
  try {
    const response = await fetch(
      `${winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
    );
    return {
      result: await response.json(),
      totalCount: response.headers.get('X-Total-Count') || '0',
    };
  } catch {
    throw new Error();
  }
};

export const getWinner = async (id) => {
  try {
    const response = await fetch(`${winners}/${id}`);
    return {
      status: response.status,
      result: await response.json(),
    };
  } catch {
    throw new Error();
  }
};

export const createWinner = async (car) => {
  try {
    const response = await fetch(`${winners}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });

    return response.status;
  } catch {
    throw new Error();
  }
};

export const deleteWinner = async (id) => {
  try {
    await fetch(`${winners}/${id}`, {
      method: 'DELETE',
    });
  } catch {
    throw new Error();
  }
};

export const updateWinner = async (car) => {
  try {
    await fetch(`${winners}/${car.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });
  } catch {
    throw new Error();
  }
};
