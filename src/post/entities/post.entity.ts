import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';

@Entity({ name: 'Post' })
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  title!: string;

  @Column({ nullable: false })
  content!: string;

  @CreateDateColumn({ nullable: false })
  created!: Date;

  @UpdateDateColumn({ nullable: true, default: null })
  updated?: Date;
}
