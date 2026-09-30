# Creating A Pet LLM

*In which Gabriel learns black box optimisation is pretty difficult, actually*


<!--
    TODO:
    * get data for no OOB memory injection
    * get data for no OOB memory clear
    * get data for different values of MAX_OOB_COUNT
    * make a nice graph of the above
    * maybe put in passive voice??
 -->


## Initial setup

<!-- I created a X with the system prompt Y -->

Interestingly, the LLM seemed to often consider itself to be a fish,
despite that only being implied from the system prompt. <!-- put image or logs here -->

## Out Of Bounds

Unfortunately it was pretty common for the pet to attempt to go out of bounds,
despite the system prompt clearly saying otherwise.
To solve this, whenever the LLM attempted to go out of bounds I would inject a
system prompt into the memory, telling it that it could't leave the tank.
This didn't seem to make a huge difference though,
so I implemented a system to reset the memory upon repeated out of bound attempts,
in case it got hung up on the idea of leaving the tank.

```python
if self.target_out_of_bounds(action):
    logger.info(f"tried to go to {action.target_x, action.target_y}")
    self.memory += RoleContent.system("You can't leave the tank!")
    self.current_oob_count +=1
    self.report.out_of_bounds_attempts +=1

    if self.current_oob_count >= self.MAX_OOB_COUNT:
        logger.info("attempted out-of-bounds too much, clearing memory")
        self._fallback()
        self.memory.clear()
        self.current_oob_count = 0
else:
    self.result_queue.put(action)
    self.current_oob_count = 0
```

### Trying different methods

I then attempted different messages, to see if being more explicit was useful

| Message | Minimum number of oob attempts |
| ------- | ------------------------------ |
| You can't leave the tank! | 38 |
| You can't leave the tank! Try a coordinate inside ({}, {}). | 24 |
| You can't leave the tank! Ensure x coordinate is between 0 and {}, and y coordinate is between 0 and {}.| 28 |
| (no message) | 43 |

As seen, the best message is explicit about coordinates without being excessive.

## Testing Different Models

With the out of bounds message optimised, at least for now, I turned my attention to model choice.


- `kaetemi/Llama-3.2-3B-Q4_0-GGUF`
    - pretty good

| Trial | Seed | Context Size | Temperature | Frequency Penalty | Presence Penalty | Repeat Penalty | Min P | Comment |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| 187   | 0 | 2048 | 1.8833118219595364 | 2.3055297123410234 | 1.490520200584878 | 0.7831641844564082 | 0.05 | good |
| 183   | 0 | 2048 | 1.9604443514736345 | 1.7236074544269426 | 0.7375280022674281 | 0.8474958097025505 | 0.05 | good |
| 177   | 0 | 2048 | 2.2166852443729677 | 1.3003303705353784 | 1.1550525966716474 | 2.1483214552656524 | 0.05 | decent |
| 179   | 0 | 2048 | 1.9111276613240837 | 2.4500329837767674 | 0.42037076341613633 | 1.0612204484652779 | 0.05 | decent |
| 184   | 1 | 2048 | 1.561400735914138 | 2.2252659604536875 | 1.5998639766598526 | 0.22185606073265218 | 0.05 | made it crazy |

Gemma

- `llama_kv_cache: the V embeddings have different sizes across layers and FA is not enabled - padding V cache to 512`
- Excluded
- Wasn't that interesting anyway

Nemotron

- `llama_kv_cache: the V embeddings have different sizes across layers and FA is not enabled - padding V cache to 1024`
- Does give interesting responses
- I'll give it like an hour so

### MiniCPM

Seems to listen to "you can't leave the tank", but not actually respect it.
Reddit got my hopes up but it seems kinda dumb.

## Changing out-of-bounds message injection

Presently, upon attempting to go out of bounds gives the out-of-bounds message in the `system` role.
I wanted to experiment with different roles.


```json
{"op_code":4,"worker_id":"47f8d929-115a-42de-bece-da65e7d9d3bb-29688","study_id":14,"datetime_start":"2026-09-11T11:21:04.272359"}
{"op_code":5,"worker_id":"47f8d929-115a-42de-bece-da65e7d9d3bb-29688","trial_id":251,"param_name":"temperature","param_value_internal":1.6080233863154991,"distribution":"{\"name\": \"FloatDistribution\", \"attributes\": {\"step\": null, \"low\": 0.8, \"high\": 2.5, \"log\": false}}"}
{"op_code":5,"worker_id":"47f8d929-115a-42de-bece-da65e7d9d3bb-29688","trial_id":251,"param_name":"frequency_penalty","param_value_internal":0.6834774412834228,"distribution":"{\"name\": \"FloatDistribution\", \"attributes\": {\"step\": null, \"low\": 0.2, \"high\": 2.5, \"log\": false}}"}
{"op_code":5,"worker_id":"47f8d929-115a-42de-bece-da65e7d9d3bb-29688","trial_id":251,"param_name":"presence_penalty","param_value_internal":0.20042013398601832,"distribution":"{\"name\": \"FloatDistribution\", \"attributes\": {\"step\": null, \"low\": 0.2, \"high\": 2.5, \"log\": false}}"}
{"op_code":5,"worker_id":"47f8d929-115a-42de-bece-da65e7d9d3bb-29688","trial_id":251,"param_name":"repeat_penalty","param_value_internal":1.008843561462299,"distribution":"{\"name\": \"FloatDistribution\", \"attributes\": {\"step\": null, \"low\": 0.2, \"high\": 2.5, \"log\": false}}"}
{"op_code":6,"worker_id":"47f8d929-115a-42de-bece-da65e7d9d3bb-29688","trial_id":251,"state":3,"values":null,"datetime_complete":"2026-09-11T11:22:33.361628"}
```


## Training

In order to train with pre-existing messages, I needed to improve the thought logging system.
While I was able to quickly throw together a `jsonl` based logger, I wanted to practice postgres.

<!-- Dependancy injection -->

<!-- Issues with flash-attention in gemma-4-E2B.i1-Q4_K_M -->

<!-- 

## GGUF conversion

Want to use `ByteDance/Ouro-1.4B`

- Good entry to huggingface, will help familiarise me

Tried doing `python convert_hf_to_gguf.py --remote 'ByteDance/Ouro-1.4B'`

- `ERROR:hf-to-gguf:Model OuroForCausalLM is not supported`

Need to use [this guide](https://github.com/ggml-org/llama.cpp/blob/master/docs/development/HOWTO-add-model.md)

`constants.MODEL_TENSORS` dict goes from lines 1979-5394

Awful dev experience

- could all be replaced with a json


 -->