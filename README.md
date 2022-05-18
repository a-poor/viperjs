# ViperJS

_created by Austin Poor_

## Notes

__Config precedence:__
* Explicit call to `Set`
* Flag
* Environment variable
* Config file
* Key/Value store (etcd, AWS secrets manager, consul, redis)
* Default value

__Considerations:__
* How to handle errors? (eg type errors when parsing command line args)
