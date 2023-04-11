# action-post-run
A GitHub Action that allows you to run a shell step as a post-run step.

In most cases this isn't needed. You can get the same benefits by just 
putting a separate `run` step at the end of your workflow. The real case
where this action is useful is when writing composite actions, where you
can't just set things up to run at the end of the workflow.

# Example Usage
```yaml
- uses: actions/checkout@v3

- uses: actions/cache@v3
  with:
    # ...

- uses: swlynch99/action-post-run@v1
  with:
    run: |
      ./clean-outdated-cache-entries.sh

# .. do build here 
```
