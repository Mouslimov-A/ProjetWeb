// import {
//   Column,
//   Entity,
//   JoinTable,
//   ManyToMany,
//   ManyToOne,
//   PrimaryColumn,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
// import { ulid } from 'ulid';
//
//
// @Entity()
// export class Profile {
  // @PrimaryColumn({ type: 'varchar', length: 26, default: () => `'${ulid()}'` })
  // profile_id: string;
  // @Column()
  // nbLike: number;
  //
  // @ManyToMany(() => Account, (account: Account) => account.profiles)
  //
  // @JoinTable({
  //   name: 'account_profile',
  //   inverseJoinColumn: { name: 'car_id_fk', referencedColumnName: 'account_id' },
  //   joinColumn: { name: 'profile_id_fk', referencedColumnName: 'profile_id' },
  // })
  // accounts: Account[];
//
// }