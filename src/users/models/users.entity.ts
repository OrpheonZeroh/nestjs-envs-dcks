import { Generated,
    Column,
    UpdateDateColumn,
    CreateDateColumn,
    BeforeInsert, 
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm';
import { UsersRole } from './users.dto';

@Entity('Users')
export class UsersEntity extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar', unique: true, nullable: false })
    name: string;

    @Column({ type: 'varchar', unique: true, nullable: false })
    email: string;

    @Column({ type: 'varchar', select: false, nullable: false })
    password: string;

    @Column()
    verificated: boolean;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updateAt: Date;

    @Column({type: 'enum', enum: UsersRole, default: UsersRole.DEV})
    role: UsersRole;

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }
}