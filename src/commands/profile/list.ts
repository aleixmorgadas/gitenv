// Copyright (c) 2021 Aleix Morgadas <aleix.morgadas@pm.me>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Command, command, metadata, option, Options } from 'clime';

export class ProfileOptions extends Options {
    @option({
        description: '(Optional) Select between your profiles, by providing a profile name.',
    })
    profile: string;
}

@command({
    description: 'Display the list of stored profiles',
})
export default class extends Command {

    @metadata
    execute(options: ProfileOptions) {
        let message = '';
        console.log('hi')
    }
}