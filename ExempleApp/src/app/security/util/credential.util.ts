import {Credential} from '../data/credential.business';
import {CredentialDto} from '../data/credential.dto';


export class CredentialUtilService {

  static getEmpty(): Credential {
    return {
      created: new Date(),
      updated: new Date(),
      active: false,
      id: '',
      isAdmin: false,
      isEmpty: false,
      mail: '',
      password: '',
      username: ''

    };
  }


static fromDTO(dto: CredentialDto): Credential {
  return {
    active: dto.active,
    id: dto.credential_id,
    isAdmin: dto.isAdmin,
    isEmpty: false,
    mail: dto.mail,
    password: dto.password,
    username: dto.username,
    created: dto.created,
    updated: dto.updated,
  };
}


  static toDTO(business: Credential): CredentialDto {
    return {
      created: business.created,
      updated: business.updated,
      active: business.active,
      credential_id: business.id,
      isAdmin: business.isAdmin,
      mail: business.mail,
      password: business.password,
      username: business.username
    };
  }
}

