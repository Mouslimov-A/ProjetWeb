import { Profile } from 'feature/profile/data/entity/profile.entity';
import { Entity, PrimaryColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { ulid } from 'ulid';

@Entity()
export class Account {

  @PrimaryColumn('varchar', { length: 26, default: () => `'${ulid()}'` }) // <-- Décorateur PK manquant
  account_id: string;

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  birthday: Date;

  @Column({ nullable: true })
  mail: string;
  @ManyToMany(() => Profile, (profile: Profile) => profile.accounts, { cascade: true, eager: true })
  profiles: Profile[];
}
