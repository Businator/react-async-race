import { Car, CarEngine, Winner } from '../types';

const base = 'http://127.0.0.1:3000';
const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

///////////////Work With Cars///////////////

export const getCars = async (page: number, limit = 7) => {
  try {
    const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);

    return {
      items: (await response.json()) as [Car],
      count: response.headers.get('X-Total-Count'),
    };
  } catch {
    throw new Error();
  }
};

export const getCar = async (id: number) => {
  try {
    const response = await fetch(`${garage}/${id}`);
    return {
      status: response.status,
      result: (await response.json()) as [Car],
    };
  } catch {
    throw new Error();
  }
};

export const createCar = async (car: Car) => {
  try {
    await fetch(`${garage}`, {
      method: 'POST',
      body: JSON.stringify(car),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch {
    throw new Error();
  }
};

export const deleteCar = async (id: number) => {
  try {
    await fetch(`${garage}/${id}`, {
      method: 'DELETE',
    });
  } catch {
    throw new Error();
  }
};

export const updateCar = async (id: number, car: Car) => {
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

export const startEngine = async (id: number) => {
  try {
    const response = await fetch(`${engine}?id=${id}&status=started`, {
      method: 'PATCH',
    });
    return {
      status: response.status,
      result: (await response.json()) as CarEngine,
    };
  } catch {
    throw new Error();
  }
};

export const stopEngine = async (id: number) => {
  try {
    const response = await fetch(`${engine}?id=${id}&status=stopped`, {
      method: 'PATCH',
    });
    return {
      status: response.status,
      result: (await response.json()) as CarEngine,
    };
  } catch {
    throw new Error();
  }
};

export const drive = async (id: number) => {
  try {
    const response = await fetch(`${engine}?id=${id}&status=drive`, {
      method: 'PATCH',
    });
    return response.status;
  } catch {
    throw new Error();
  }
};

///////////////Work With Winners///////////////

export const getWinners = async (
  page: number,
  limit = 10,
  sort = 'time',
  order = 'ASC'
) => {
  try {
    const response = await fetch(
      `${winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
    );
    return {
      result: (await response.json()) as Winner[],
      totalCount: response.headers.get('X-Total-Count') || '0',
    };
  } catch {
    throw new Error();
  }
};

export const getWinner = async (id: number) => {
  try {
    const response = await fetch(`${winners}/${id}`);
    return {
      status: response.status,
      result: (await response.json()) as Winner,
    };
  } catch {
    throw new Error();
  }
};

export const createWinner = async (car: Winner) => {
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

export const deleteWinner = async (id: number) => {
  try {
    await fetch(`${winners}/${id}`, {
      method: 'DELETE',
    });
  } catch {
    throw new Error();
  }
};

export const updateWinner = async (car: Winner) => {
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
