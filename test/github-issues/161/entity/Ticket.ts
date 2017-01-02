import {Table} from "../../../../src/decorator/tables/Table";
import {PrimaryGeneratedColumn} from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import {OneToOne} from "../../../../src/decorator/relations/OneToOne";
import {Request} from "./Request";
import {JoinColumn} from "../../../../src/decorator/relations/JoinColumn";
import {Column} from "../../../../src/decorator/columns/Column";

@Table()
export class Ticket {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(type => Request, {
        cascadeInsert: true,
        cascadeUpdate: true,
        cascadeRemove: true
    })
    @JoinColumn()
    request: Request;

}