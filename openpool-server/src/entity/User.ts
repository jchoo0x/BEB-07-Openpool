import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    address: string

    @Column()
    nickname: string

    @Column()
    created_At: Date
}