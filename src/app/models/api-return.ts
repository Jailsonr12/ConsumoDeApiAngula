export class ApiResults {
  info?: Info;
  results?: Results[];

  constructor(obj: Partial<ApiResults>) {
    Object.assign(this, obj);
  }
}

export class Info {
  count?: number;
  pages?: number;
  next?: string;
  prev?: string;

  constructor(obj: Partial<Info>) {
    Object.assign(this, obj);
  }
}

export class Results {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  origin?: Origin;
  image?: string;

  constructor(obj: Partial<Results>) {
    Object.assign(this, obj);
  }
}

export class Origin {
  name?: string;

  constructor(obj: Partial<Origin>) {
    Object.assign(this, obj);
  }
}
