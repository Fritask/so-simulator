import { Injectable } from '@angular/core';
import { Process } from 'src/app/models/process';

@Injectable({
    providedIn: 'root',
})
export class ProcessesService {
    constructor() {}

    getProcesses() {
		const processes: Process[] = [
			{
				position: 1,
				pid: Math.floor(Math.random() * 100000) + 1,
				priority: 0,
				status: 'Pronto',
				cpuTime: 0
			},
			{
				position: 2,
				pid: Math.floor(Math.random() * 100000) + 1,
				priority: 0,
				status: 'Pronto',
				cpuTime: 0
			},
			{
				position: 3,
				pid: Math.floor(Math.random() * 100000) + 1,
				priority: 0,
				status: 'Pronto',
				cpuTime: 0
			},
		];

		return processes;
	}
}
