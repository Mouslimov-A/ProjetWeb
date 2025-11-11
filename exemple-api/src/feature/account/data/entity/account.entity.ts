import { Profile } from 'feature/profile/data/entity/profile.entity';
import { Entity, PrimaryColumn, Column, OneToMany, ManyToMany } from 'typeorm'; // <-- Imports manquants
import { ulid } from 'ulid'; // <-- Import manquant pour la clé

@Entity()
export class Account {

  // (Style basé sur person.entity.ts [cite: 809-810])
  @PrimaryColumn('varchar', { length: 26, default: () => `'${ulid()}'` }) // <-- Décorateur PK manquant
  account_id: string;

  @Column({ nullable: true }) // <-- Décorateur manquant
  firstname: string;

  @Column({ nullable: true }) // <-- Décorateur manquant
  lastname: string;

  @Column({ nullable: true }) // <-- Décorateur manquant
  birthday: Date;

  @Column({ nullable: true }) // <-- Décorateur manquant
  mail: string;
  @ManyToMany(() => Profile, (profile: Profile) => profile.accounts, { cascade: true, eager: true })
  profiles: Profile[]; // Corrigé : doit être un tableau (Profile[])
}
