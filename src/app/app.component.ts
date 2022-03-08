import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ProcessesService } from './services/processes/processes.service';
import { Process } from './models/process';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild(MatTable) table!: MatTable<Process>;
    @ViewChild('createProcessDialog', { static: true })
    processDialog!: TemplateRef<any>;

    title = 'So Simulator';

    processes: Process[] = [];
    displayedColumns = ['pid', 'priority', 'status', 'cpuTime', 'actions'];

    constructor(
        private processesService: ProcessesService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.processes = this.processesService.getProcesses();
    }

    createProcess() {
        if (this.processes.length < 10) {
            this.processes.push({
                position: this.processes.length + 1,
                pid: Math.floor(Math.random() * 100000) + 1,
                priority: 0,
                status: 'Pronto',
                cpuTime: 0,
            });

            this.table.renderRows();
        } else {
            alert('Ops...\nParece que você atingiu o limite de processos :(');
        }
    }

    suspendProcess(process: Process) {
        const processIndex = this.processes.findIndex(
            (item) => item === process
        );

        this.processes[processIndex].status = 'Suspenso';
    }

    resumeProcess(process: Process) {
        const processIndex = this.processes.findIndex(
            (item) => item === process
        );

        this.processes[processIndex].status = 'Pronto';
    }

    // prioritizeProcess(process: Process) {
    // 	const processIndex = this.processes.findIndex((item) => item === process);

    // 	this.processes[processIndex].priority = 'Pronto';
    // }

    endProcess(process: Process) {
        const processIndex = this.processes.findIndex(
            (item) => item === process
        );

        this.processes.splice(processIndex, 1);

        this.table.renderRows();
    }

    teste(element: Process) {
        console.log(element);
    }

    openProcessDialog() {
        this.dialog.open(this.processDialog);
    }
}
