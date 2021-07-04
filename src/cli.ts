// Copyright (c) 2021 Aleix Morgadas <aleix.morgadas@pm.me>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { CLI, Shim } from 'clime';
import * as Path from 'path';

// The second parameter is the path to folder that contains command modules.
const cli = new CLI('gitenv', Path.join(__dirname, 'commands'));

// Clime in its core provides an object-based command-line infrastructure.
// To have it work as a common CLI, a shim needs to be applied:
const shim = new Shim(cli);
shim.execute(process.argv);